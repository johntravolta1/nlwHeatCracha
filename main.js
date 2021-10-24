
    const links = {
        
        github:"johntravolta1",
        youtube:"jakelinygracielly",
        facebook:"maykbrito",
        instagram:"jakeliny.gracielly",
        twitter:"jakelinytec",
    }

        function changeUsername() {

            for (let li of socialLinks.children) {
                const social = li.getAttribute('class');
                li.children[0].href = `https://${social}.com/${links[social]}`;
            }
        }

        changeUsername();


        function getGitHubProfileInfo() {
            const url = `https://api.github.com/users/${links.github}`

            fetch(url)
            .then(response => response.json())
            .then(data => {
                const name = document.getElementById("userName")
                console.log(data)
                name.innerText = data.name;
                const bio = document.getElementById("userBio");
                bio.innerText = data.bio;
                const linkGithub = document.getElementById("githubLink")
                console.log(linkGithub)
                linkGithub.setAttribute("href",data.url);
                console.log(linkGithub)
                const userPhoto = document.getElementById("userPhoto")
                userPhoto.setAttribute("src",data.avatar_url)
                const userLogin =document.getElementById("userLogin");
                userLogin.textContent = data.login


                })
        } 
        

        getGitHubProfileInfo()
