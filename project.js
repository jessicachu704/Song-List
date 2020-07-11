        //use 2d array of artists and songs and use algorithm to loop through the array then show the corresponding info
        var arianaGrande = ["Stuck with You", "Rain on Me", "7 Rings", "Thank U, Next", "No Tears Left to Cry"];
        var billieEilish = ["Bad Guy", "Everything I Wanted", "Lovely", "When the Party's Over", "No Time to Die"];
        var edSherran = ["Perfect", "I don't Care", "Shape of You", "Beautiful People", "Photograph"];
        var shawnMendes = ["Señorita", "Treat You Better", "If I Can't Have You", "There's Nothing Holding Me Back", "In My Blood"];
        var taylorSwift = ["You Need to Calm Down", "ME!", "The Man", "Lover", "Blank Space"];
        var camilaCabello = ["Señorita", "My Oh My", "South of The Border", "Havana", "Beautiful"];
        var artists = ["ariana grande", "billie eilish", "ed sherran", "shawn mendes", "taylor swift", "camila cabello"];
        var artistsName = ["ariana grande", "billie eilish", "ed sherran", "shawn mendes", "taylor swift", "camila cabello"];
        var songs = [arianaGrande, billieEilish, edSherran, shawnMendes, taylorSwift, camilaCabello];
        var grandeLink = ["https://www.youtube.com/watch?v=pE49WK-oNjU", "https://www.youtube.com/watch?v=AoAm4om0wTs", "https://www.youtube.com/watch?v=QYh6mYIJG2Y","https://www.youtube.com/watch?v=gl1aHhXnN1k","https://www.youtube.com/watch?v=ffxKSjUwKdU" ];
        var eilishLink =["https://www.youtube.com/watch?v=DyDfgMOUjCI", "https://www.youtube.com/watch?v=EgBJmlPo8Xw", "https://www.youtube.com/watch?v=V1Pl8CzNzCw", "https://www.youtube.com/watch?v=pbMwTqkKSps", "https://www.youtube.com/watch?v=GB_S2qFh5lU"];
        var sherranLink =["https://www.youtube.com/watch?v=2Vv-BfVoq4g", "https://www.youtube.com/watch?v=y83x7MgzWOA", "https://www.youtube.com/watch?v=JGwWNGJdvx8", "https://www.youtube.com/watch?v=mj0XInqZMHY", "https://www.youtube.com/watch?v=qgmXPCX4VzU"];
        var mendesLink =["https://www.youtube.com/watch?v=Pkh8UtuejGw", "https://www.youtube.com/watch?v=lY2yjAdbvdQ", "https://www.youtube.com/watch?v=oTJ-oqwxdZY", "https://www.youtube.com/watch?v=dT2owtxkU8k", "https://www.youtube.com/watch?v=36tggrpRoTI"];
        var swiftLink = ["https://www.youtube.com/watch?v=Dkk9gvTmCXY", "https://www.youtube.com/watch?v=FuXNumBwDOM", "https://www.youtube.com/watch?v=AqAJLh9wuZ0", "https://www.youtube.com/watch?v=-BjZmE2gtdo", "https://www.youtube.com/watch?v=e-ORhEE9VVg"];
        var cabelloLink =["https://www.youtube.com/watch?v=Pkh8UtuejGw", "https://www.youtube.com/watch?v=6fd2kkLmSDQ", "https://www.youtube.com/watch?v=UPOT2tgY9QQ", "https://www.youtube.com/watch?v=HCjNJDNzw8Y", "https://www.youtube.com/watch?v=Uk1hv6h7O1Y"];
        var songLinks = [grandeLink, eilishLink, sherranLink, mendesLink, swiftLink, cabelloLink];
        var songList = [];
        var i;

        function songs1() {
            var hi = document.getElementById("artistSearch").value;
            console.log(hi);
            console.log(artists.length);
        }

        function grande() {
            document.getElementById("artistSearch").value = "Ariana Grande";
        }

        function eilish() {
            document.getElementById("artistSearch").value = "Billie Eilish";
        }

        function sherran() {
            document.getElementById("artistSearch").value = "Ed Sherran";
        }

        function mendes() {
            document.getElementById("artistSearch").value = "Shawn Mendes";
        }

        function swift() {
            document.getElementById("artistSearch").value = "Taylor Swift";
        }

        function cabello() {
            document.getElementById("artistSearch").value = "Camila Cabello";
        }

        //match the artist name with the artists array
        //brute force string matching algorithm
        function searchMatch() {
            let input = (document.getElementById("artistSearch").value).toLowerCase();
            for (i = 0; i <= artists.length; i++) {
                if (input == artists[i]) {
                    console.log(i);
                    clear();
                    show(i);
                    document.getElementById("artistSearch").value = null;
                    return i;
                } else if (i == 6) {
                    console.log("no artists found");
                    window.alert("Please Enter A Valid Artist Name");
                }
            }
        }

        function show(num) {
            songs[num].forEach(myFunction1);
            songLinks[num].forEach(myFunction2);
        }

        function clear() {
            document.getElementById("name").innerHTML = null;
            document.getElementById("demo").innerHTML = null;
        }

        function myFunction(item, index) {
            document.getElementById("name").innerHTML = document.getElementById("artistSearch").value;
            document.getElementById("demo").innerHTML += (index + 1) + ". " + item ;
        }
        function myFunction1(item, index) {
            let btn = document.createElement("button");
            btn.setAttribute("onclick", "artistInfo()");
            btn.innerHTML = "See more about " + document.getElementById("artistSearch").value;
            document.getElementById("name").innerHTML = document.getElementById("artistSearch").value;
            document.getElementById("name").appendChild(btn);
            document.getElementById("demo").innerHTML += (index + 1) + ". " + item ;
            let btn1 = document.createElement("button");
            btn1.setAttribute("id", "btn"+" "+ index);
            console.log(btn1.id)
            btn1.innerHTML="Listen";
            btn1.setAttribute("onclick","clicked(this.id)");
            let br = document.createElement("br");
            document.getElementById("demo").appendChild(btn1);
            document.getElementById("demo").appendChild(br);
        }
        function myFunction2(item, index) {
            console.log((index +1) + "." + item);
        }
        function clicked(id){
            console.log(id)
            let index = id.split(" ")[1];
            console.log(index);
            console.log(songLinks[i][index]);
            let someLink = songLinks[i][index];
            window.location.href = someLink;
        }

        function newList() {
            let inputSong = (document.getElementById("newSong").value).split(",");
            for (j = 0; j < inputSong.length; j++) {
                songList.push(inputSong[j]);
            }
            document.getElementById("newSong").value = null;
            console.log(songList);

        }

        function listOfSongs() {
            clear();
            insertionSort(songList);
            songList.forEach(myFunction);

        }
        //insertion sort the song list
        function insertionSort(list) {
            for (let c = 1; c < list.length; c++) {
                let v = list[c];
                let m = c - 1
                while (m >= 0 && list[m] > v) {
                    list[m + 1] = list[m];
                    m = m - 1;
                }
                list[m + 1] = v;
            }
            console.log(list);
        }

        function artistInfo(){
            if (i == 0){
                document.getElementById("grandeInfo").style.display = "block";
            }
            if (i == 1){
                document.getElementById("eilishInfo").style.display = "block";
            }
            if (i == 2){
                document.getElementById("sherranInfo").style.display = "block";
            }
            if (i == 3){
                document.getElementById("mendesInfo").style.display = "block";
            }
            if (i == 4){
                document.getElementById("swiftInfo").style.display = "block";
            }
            if (i == 5){
                document.getElementById("cabelloInfo").style.display = "block";
            }
        }