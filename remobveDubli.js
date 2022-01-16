var deleteDuplicates = function(head) {
    if(head === null || head.next === null) 
        return head;
    
    let prev = head;
    let curr = head.next;
    
    while(curr !== null) {
        if(prev.val === curr.val) {
            let temp = curr;
            prev.next = curr.next;
            curr = curr.next;
            temp = null;
        } else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    return head;
};