var mergeTwoLists = function(list1, list2) {
    if(!list1 && !list2) return null;
    
    const list = [];
    
    while(list1) {
      list.push(list1.val);
      list1 = list1.next;
    }
    
    while(list2) {
      list.push(list2.val);
      list2 = list2.next;
    }
    
    list.sort((a ,b) => b - a);
    
    const head = new ListNode(list.pop());
    let current = head;
    
    while(list.length) {
      current.next = new ListNode(list.pop());
      current = current.next;
    }
    
    return head;
  };