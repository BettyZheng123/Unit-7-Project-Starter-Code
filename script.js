$("button").click(function(){
    let enterone=$(".name").val();
    let entertwo=$(".tvshow").val(); 
    let enterthree=$(".times").val();
    let weeks=1447*enterthree;
    console.log(weeks);
    let results="Hello"+" my name is "+ " " +enterone+ "my favorite tv show is  "+entertwo+ " by 2050 I will have watched it "+ weeks+ "times ";
    console.log(results);
               
    $(".fortune-display").append(results);
});