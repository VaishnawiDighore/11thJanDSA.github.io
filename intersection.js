const getIntersectionNode = (headA, headB) => {
    
    if(!headA || !headB) return null;
    
    let runnerA = headA;
    let runnerB = headB;
   
    while(runnerA !== runnerB){
        if(!runnerA){
            runnerA = headB;
        } else{
            runnerA = runnerA.next
        }
        
        if(!runnerB){
            runnerB = headA;
        } else {
            runnerB = runnerB.next;
        }   
    }
    return runnerA;
};