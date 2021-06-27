var count=11;
const timer=(count,callback)=>{
  
  if(count>0)
    {
      setTimeout(callback,1000);
    
    }
  else
  {

  var tags=document.getElementsByTagName("h1");
  for(tag of tags)
  {
    console.log(tag);
    if(tag.className!='countdown')
    {
      tag.style.display='block';
      if(tag.className==='middle')
      tag.innerHTML='Independence';

    }
    else
    tag.style.display='none';
  }
    
  }
};

timer(count,()=>{
  count--;
  document.getElementsByClassName("countdown")[0].innerHTML=count;
  timer(count,()=>{
    count--;
    document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
    timer(count,()=>{
      count--;
      document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
      timer(count,()=>{
        count--;
        document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
        timer(count,()=>{
          count--;
          document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
          timer(count,()=>{
            count--;
            document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
            timer(count,()=>{
              count--;
              document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
              timer(count,()=>{
                count--;
                document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
                timer(count,()=>{
                  count--;
                  document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
                  timer(count,()=>{
                    count--;
                     document.getElementsByClassName("countdown")[0].innerHTML='0'+count;
                    
                   timer(count,()=>{
                    count--;
                    document.getElementsByClassName("countdown")[0].innerHTML=count;
                    timer(count,()=>{
                    count--;
                    });
                   });
                  });
                });
              });
            });
          });
        });
      });
    });
  });      
  

});


