$(function(){
    $('body').on('click', '.replyEditBtn', function(){
        if(confirm('답변을 수정하시겠습니까?')){
            var closestTr = $(this).closest('tr');
            
            var boardId = closestTr.find('[id^="boardId_"]').val();
            var boardContent = closestTr.find('[id^="boardContent_"]').val();
			
			

            $.ajax({
                type: 'post',
                url: '/kream/admin/replyEdit',
                data: {
                    boardId: boardId,
                    boardContent: boardContent,
                },
                success: function () {
                    alert('수정에 성공하였습니다.');
                    window.location.reload();
                },
                error: function () {
                    alert('수정에 실패하였습니다. 잠시후 다시 등록해 주세요.');
                    window.location.reload();
                }
            });		
        }//if
    });
});
