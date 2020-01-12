//Api for getting music from Deezer to be played in the background

export function getMusic(keyword) {
    if (typeof keyword === "string") {
        const promise = new Promise(function (resolve, reject) {

        var data = null;
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;


        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                // console.log(this.responseText);
                // let a = parseResponse(this.responseText);
                // //console.log(a);
                // return a;
                console.log("this is returned: " + parseResponse(this.responseText));
                resolve(parseResponse(this.responseText));
                //return parseResponse(this.responseText);    
            }
        });

        xhr.open("GET", "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + keyword);
        xhr.setRequestHeader("x-rapidapi-host", "deezerdevs-deezer.p.rapidapi.com");
        xhr.setRequestHeader("x-rapidapi-key", "0aadc0168amsh484f003699f37cfp1e222fjsn2517d5732552");

        xhr.send(data);
        });

        promise.then(result => {
            console.log("then statement" + result);
            return result;
            //_this.setState({audio : result});
        })
    } else {
        return "";
    }
};

export function parseResponse (response) {
    let musicIDs = [];;
    let dataList = JSON.parse(response);
    for (let music of dataList.data) {  
        musicIDs.push(music.preview);
    }
    if (musicIDs.length > 0) {
        return musicIDs[Math.round(Math.random() * (musicIDs.length - 1))];
    }
}



