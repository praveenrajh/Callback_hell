let para=document.querySelector("h1");
setTimeout(()=>{
    para.innerText="9";
    setTimeout(()=>{
        para.innerText="8";
        setTimeout(()=>{
            para.innerText="7";
            setTimeout(()=>{
                para.innerText="6";
                setTimeout(()=>{
                    para.innerText="5";
                    setTimeout(()=>{
                        para.innerText="4";
                        setTimeout(()=>{
                            para.innerText="3";
                            setTimeout(()=>{
                                para.innerText="2";
                                setTimeout(()=>{
                                    para.innerText="1";
                                    setTimeout(()=>{
                                        para.innerText="Happy Independence Day🎉🎊";
                                        var r=document.querySelector(".red");
                                        var q=document.querySelector(".green");
                                        q.setAttribute("style","background-color:green");
                                        r.setAttribute("style","background-color:red");
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)