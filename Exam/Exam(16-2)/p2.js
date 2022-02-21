let category = ["movie", "news", "education", "sports", "politics"];
let age = ["teenager", "adult"];
let visitors = parseInt(Math.random()*101)
temp_arr = []
array = []

for (i = 0; i < 100; i++) {

        var c = Math.round(Math.random() * 5)
        var a = Math.round(Math.random())
        var v = Math.round(Math.random() * 100)
    temp_arr = {age: age[a] ,type: category[c] ,  visitors: v}
    array.push(temp_arr)
}
// console.log(array);


let teenMovie = 0,
    teenNews = 0,
    teenEdu = 0,
    teenSports = 0,
    teenPoli = 0;
let aduMovie = 0,
    aduNews = 0,
    aduEdu = 0,
    aduSports = 0,
    aduPoli = 0;


    for(i=0;i<array.length;i++){

        if(array[i].age == "adult")
        {
            if(array[i].type == "movie")
            {
                aduMovie+=1;
            }
            else if(array[i].type == "news")
            {
                aduNews+=1;
            }
            else if(array[i].type == "education")
            {
                aduEdu+=1;
            }
            else if(array[i].type == "sports")
            {
                aduSports+=1;
            }
            else {
                aduPoli +=1
            }

            
        }
        else {
            if(array[i].type == "movie")
            {
                teenMovie+=1;
            }
            else if(array[i].type == "news")
            {
                teenNews+=1;
            }
            else if(array[i].type == "education")
            {
                teenEdu+=1;
            }
            else if(array[i].type == "sports")
            {
                teenSports+=1;
            }
            else {
                teenPoli +=1
            }
        }
        
        
    }

    Ans = [{"movie" : teenMovie+"%"+"  "+aduMovie+"%"},
        {"news" : teenNews+"%"+"  "+aduNews+"%"},
        {"education" : +teenEdu+"%"+"  "+aduEdu+"%"},
        {"sports" : teenSports+"%"+"  "+aduSports+"%"},
        {"politics" : teenPoli+"%"+"  "+aduPoli+"%"}]
    

// console.log(aduMovie,aduNews,aduEdu,aduSports,aduPoli)
// console.log(teenMovie,teenNews,teenEdu,teenSports,teenPoli);
console.log(Ans);