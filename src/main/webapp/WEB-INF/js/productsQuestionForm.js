$(function () {
    function setQuestionSection(boardId, boardTitle, boardContent, nickname, boardCreatedAt, security) {
        let result = '<div class="questionSection">';
        let time = new Date(boardCreatedAt);
        let formattedTime = `${time.getFullYear()}/${(time.getMonth() + 1).toString().padStart(2, '0')}/${time.getDate().toString().padStart(2, '0')} 
        ${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;

        if (security == 1 && $('#nickname').val() != nickname) {
            result += `
                <div class="secretQuestionHeader">
                    <div class="questionTitle">작성자만 확인 가능한 글입니다.</div>
                    <div class="questionDetail">
                        <div class="questionNickname">${nickname}</div>&nbsp;&nbsp;&nbsp;${formattedTime}
                    </div>
                </div>
            </div>`;
        } else {
            result += `
                <div class="questionHeader">
                    <input class="replyCh" type="hidden" value="0">
                    <input class="questionBoardId" type="hidden" value="${boardId}">
                    <div class="questionTitle">${boardTitle}</div>
                    <div class="questionDetail">
                        <div class="questionNickname">${nickname}</div>&nbsp;${formattedTime}
                    </div>
                </div>
                <div class="questionContent">
                    <div><pre>${boardContent}</pre></div>
                </div>
            </div>`;
        }

        $('#questionBoard').append(result);
    }

    function setReplyComment(index, boardContent, nickname, boardCreatedAt) {
        const replyClass = index % 2 === 0 ? 'evenReply' : 'oddReply';
        let time = new Date(boardCreatedAt);
        let formattedTime = `${time.getFullYear()}/${(time.getMonth() + 1).toString().padStart(2, '0')}/${time.getDate().toString().padStart(2, '0')} 
        ${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')}`;

        return `
        <div class="${replyClass}">
            <div class="replyBody">
                <div class="arrayDiv">↳</div>
                <div class="replyContent"><pre>${boardContent}</pre></div>
            </div>
            <div class="replyDetail">
                <div class="questionNickname">${nickname}</div>&nbsp;&nbsp;${formattedTime}
            </div>
        </div>`;
    }

    function setReplyWrite() {
        return `
        <div class="replyWriteDiv">
            <div class="replyWriteAreaDiv">
                <textarea class="replyWriteArea"></textarea>
            </div>
            <div class="replySubmitDiv">
                <button type="button" class="replySubmit">등록</button>
            </div>
        </div>`;
    }


    $.ajax({
        type: 'post',
        url: '/kream/product/getBoardList',
        data: {
            productId: $('#productId').val(),
            page: $('#page').val()
        },
        dataType: 'json',
        success: function (data) {
            data.forEach(function (item) {
                setQuestionSection(item.boardId, item.boardTitle, item.boardContent, item.nickname, item.boardCreatedAt, item.security);
            });
        },
        error: function (e) {
            console.log(e);
        }
    });


    $.ajax({
        type: 'post',
        url: '/kream/product/getBoardPaging',
        data: {
            productId: $('#productId').val(),
            page: $('#page').val()
        },
        dataType: 'json',
        success: function (data) {
            console.log(data.pagingHTML);
            $('#boardPagingDiv').append(`${data.pagingHTML}`);
        },
        error: function (e) {
            console.log(e);
        }
    });

    $(document).on('click', '.questionHeader', function () {
        let questionContent = $(this).next('.questionContent');
        let questionNickname = $(this).children().children('.questionNickname').text();

        if ($(this).children('.replyCh').val() == 0) {
            $(this).children('.replyCh').val('1');
            $.ajax({
                type: 'post',
                url: '/kream/product/getReplyList',
                data: {
                    productId: $('#productId').val(),
                    boardId: $(this).find('.questionBoardId').val()
                },
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    let index = 0;
                    data.forEach(function (item) {
                        questionContent.append(setReplyComment(index, item.boardContent, item.nickname, item.boardCreatedAt));
                        index += 1;
                    });

                    if (questionNickname == $('#nickname').val()) {
                        questionContent.append(setReplyWrite());
                    }
                },
                error: function (e) {
                    console.log(e);
                }
            });
        }
        setTimeout(function () {
            questionContent.slideToggle();
        }, 100);
    });

    $(document).on('click', '.replySubmit', function () {
        let replyWrite = $(this).parents('.replyWriteDiv').children().children('.replyWriteArea');
        let questionHeader = $(this).parents('.questionSection').children('.questionHeader');

        if(replyWrite.val() == '') {
            alert('문의 사항을 작성해주세요');
            replyWrite.focus();
        } else {
            if(confirm('문의 사항을 등록하시겠습니까?')) {
                $.ajax({
                    type: 'post',
                    url: '/kream/product/setProductReply',
                    data: {
                        productId: $('#productId').val(),
                        boardId: questionHeader.children('.questionBoardId').val(),
                        boardContent: replyWrite.val(),
                        nickname: $('#nickname').val()
                    },
                    success: function () {
                        alert('등록에 성공하였습니다.');
                        window.location.reload();
                    },
                    error: function () {
                        alert('등록에 실패하였습니다. 잠시후 다시 등록해 주세요.');
                        window.location.reload();
                    }
                });
            }
        }
    });
});