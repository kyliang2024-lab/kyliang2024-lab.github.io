/* Task 6 - API call */
function get_all_drinks() {
    console.log("[START] get_all_drinks()");

    // const api_endpoint_url = 'drinks.json'; // local file  
    const api_endpoint_url = 'http://localhost/DrinksAPI/'; // external


    axios.get(api_endpoint_url + "api/drink/read.php").
        then(response => {
            console.log("Axios call completed successfully!");

            // console.log(response.data.drinks); 
            // console.log(response.data.records)
            let section_results = document.getElementById('results');

            // Build a string of Bootstrap cards
            let result_str = ``;
            // let drinks_array = response.data.drinks; // Array of drink objects
            let drinks_array = response.data.records; // Array of drink objects

            // console.log(drinks_array); // Array of drink objects

            /*
                loop through drinks_array 
                - each item (drink) 
                - each drink should be bootstrap card, each card will be a "col"
            */

            // Task 4 - Display Drinks
            //   Each drink is a Bootstrap card
            // Replace all the hard-coded strings with actual values as read from the JSON file
            for (let drink of drinks_array) {  // drink is an object

                // console.log(drink);//object

                //below method is okay cos your json is static and no eventlistener
                // 
                // photo_url to get photos/xx.jpg
                //                        <img src="../DrinksAPI/photos/${drink.photo_url}"

                result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${api_endpoint_url + drink.photo_url}" 
                             class="card-img-top"
                             alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
            }

            // console.log(result_str);

            // Inject the cards into the #results section
            section_results.innerHTML = result_str;
        }).
        catch(error => {
            console.log(error.message);

            // Task 5 - Data can't be loaded, display alert
            //   "Failed to load drinks data."
            //
            let error_message = "";
            error_message = `<div class="alert alert-danger alert-dismissible fade show" role="alert"> Failed to load drinks data</div>`

            // let alerts = document.getElementById("alerts");
            // alerts.innerHTML = error_message;

            document.getElementById("alerts").innerHTML = error_message
            // YOUR CODE GOES HERE

        });

    console.log("[END] get_all_drinks()");
}


/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
    console.log("[START] populate_category_dropdown()");

    const api_endpoint_url = 'http://localhost/DrinksAPI/'; // API endpoint

    axios.get(api_endpoint_url + "api/drink/category.php").
        then(response => {

            console.log("Axios call completed successfully!");

            // YOUR CODE GOES HERE
            //retrieve cat
            let cat_array = response.data.records;  //["'beer","cocktail",...]
            console.log(cat_array);

            let select = document.getElementById("category");

            for (let category of cat_array) {
                console.log(category); // string output 

                let option = document.createElement("option")
                option.value = category;
                option.textContent = category;
                console.log(option);
                select.appendChild(option);
            }

        }).
        catch(error => {
            console.log(error.message);
        });

    console.log("[END] populate_category_dropdown()");
}


/* Task 8 - Category Dropdown Event Listener */
function filterdrinkbycat() {
    const catdropdown = document.getElementById("category");
    const api_endpoint_url = 'http://localhost/DrinksAPI/';

    catdropdown.addEventListener("change", function () {
        const selectcat = this.value;
        console.log(selectcat);

        if (selectcat === "") {
            get_all_drinks();
        }
        else {
            axios.get(api_endpoint_url + `api/drink/search.php?c=${selectcat}`).
                then(response => {

                    console.log("Axios call completed successfully!");

                    let section_results = document.getElementById("results");
                    let result_str = "";
                    let drinks_array = response.data.records;
                    for (let drink of drinks_array) {
                        result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${api_endpoint_url + drink.photo_url}" 
                             class="card-img-top"
                             alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
                    }
                    section_results.innerHTML = result_str;
                }).
                catch(error => {
                    console.log(error.message);
                    let error_message = "";
                    error_message = `<div class="alert alert-danger alert-dismissible fade show" role="alert"> Failed to load drinks data</div>`

                    // let alerts = document.getElementById("alerts");
                    // alerts.innerHTML = error_message;

                    document.getElementById("alerts").innerHTML = error_message
                    // YOUR CODE GOES HERE
                });
        }
    })

}


/* Task 9 - Alcoholic Dropdown Event Listener */
function filterdrinkbyalc() {
    const alcodropdown = document.getElementById("alcoholic");
    const api_endpoint_url = 'http://localhost/DrinksAPI/';

    alcodropdown.addEventListener("change", function () {
        const selectalc = this.value;
        console.log(selectalc);

        // document.getElementById("alerts").innerHTML = ""; // good practice
        if (selectalc === "") {
            get_all_drinks();
        }
        else {
            axios.get(api_endpoint_url + `api/drink/search.php?a=${selectalc}`).
                then(response => {

                    console.log("Axios call completed successfully!");

                    let section_results = document.getElementById("results");
                    let result_str = "";
                    let drinks_array = response.data.records;

                    if (drinks_array.length === 0) {
                        result_str = ``;
                    }
                    else {
                    for (let drink of drinks_array) {
                        result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${api_endpoint_url + drink.photo_url}" 
                             class="card-img-top"
                             alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
                    }
                    section_results.innerHTML = result_str;
                }}).
                catch(error => {
                    console.log(error.message);
                    let error_message = "";
                    error_message = `<div class="alert alert-danger alert-dismissible fade show" role="alert"> Failed to load drinks data</div>`

                    // let alerts = document.getElementById("alerts");
                    // alerts.innerHTML = error_message;

                    document.getElementById("alerts").innerHTML = error_message

                });
        }
    })
}


/* Task 10 - Name search input Event Listener */
function searchbyname() {
    const namesearch = document.getElementById("name_search");
    const api_endpoint_url = "http://localhost/DrinksAPI/";

    namesearch.addEventListener("input",function(){
        const name =this.value.trim();
        
        console.log(name);

        if(name === ""){
            get_all_drinks();
        }
        else {
            axios.get(api_endpoint_url+`api/drink/search.php?n=${name}`).
                then(response =>{
                    console.log("Axios call comleteed successfully");

                    let section_results =document.getElementById("results");
                    let drinks_array =response.data.records;

                    section_results.innerHTML="";

                    for (let drink of drinks_array){
                        //create column div
                        const colDiv = document.createElement("div");
                        colDiv.classname ="col";
                        //create card div    
                        const carddiv = document.createElement("div");
                        carddiv.classname = "card h-100";
                        //create img
                        const img =document.createElement("img");
                        img.src=api_endpoint_url+ drink.photo_url;
                        img.className = "card-img-top";
                        img.alt =drink.name;
                        //create card body
                        const cardbody = document.createElement("div");
                        cardbody.classname ="card-body";
                        //create title
                        const title = document.createElement("h5");
                        title.classname = "card-title";
                        title.textContent=drink.name;
                        //create p
                        const para = document.createElement("p");
                        para.classname = "card-text small text-muted mb-0";
                        para.textContent=`${drink.category} - ${drink.alcoholic}`;


                        // build the structure
                        cardbody.appendChild(title);
                        cardbody.appendChild(para);

                        carddiv.appendChild(img);
                        carddiv.appendChild(cardbody);

                        colDiv.appendChild(carddiv);
                        section_results.appendChild(colDiv);

                    }

                })
                .catch(error => {
                console.log("Name search error:", error.message);
                
                // Create error alert using createElement
                const alertDiv = document.createElement("div");
                alertDiv.className = "alert alert-danger alert-dismissible fade show";
                alertDiv.setAttribute("role", "alert");
                alertDiv.textContent = "Failed to search drinks";
                
                document.getElementById("alerts").appendChild(alertDiv);
            });
        }

    })
}   




// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();
filterdrinkbycat();
filterdrinkbyalc();
searchbyname();