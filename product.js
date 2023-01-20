
let arrayOfProducts;
let prductRow=document.getElementById("ProductBody");
if(localStorage.getItem("products")===null){
    arrayOfProducts=[];
}
else{
    arrayOfProducts=JSON.parse(localStorage.getItem("products"));
    displayproducts();
}

function displayproducts(){
    let row='';
    for(let i=0;i<arrayOfProducts.length;i++){
        row+=`<div class="col-md-3 d-flex align-items-stretch">
                <div class="card mb-3 w-100 position-relative">
                <img src="${arrayOfProducts[i]?.imageUrl}" class="card-img-top" alt="product image" width="200px" height="200px">
                <div class="card-body">
                <h5 class="card-title d-flex justify-content-between">
                    <span>${arrayOfProducts[i]?.name}</span>
                    <span class="fw-bolder text-success">${arrayOfProducts[i]?.price}</span>
                </h5>
                <p class="card-text">${arrayOfProducts[i]?.category}</p>
                <p class="card-text mb-5">${arrayOfProducts[i]?.describtion}</p>
                <div class="position-absolute" style="bottom:10px">
                    <a href="index.html?id=${i}" type="button" class="btn btn-warning" >Update</a>
                    <button onclick="deleteProduct(${i})" type="button" class="btn btn-danger" >Delete</button>
                </div>
            </div>
        </div>
    </div>`
    }
    prductRow.innerHTML=row;
}

function deleteProduct(index){
    arrayOfProducts.splice(index,1);
    localStorage.setItem("products",JSON.stringify(arrayOfProducts));
    displayproducts();
}


function searchProduct(searchTerm){
    var cartoona = "";
    for(var i=0 ; i< arrayOfProducts.length; i++){
        if(arrayOfProducts[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true || arrayOfProducts[i].category.toLowerCase().includes(searchTerm.toLowerCase()) == true ){
            cartoona += ` <div class="col-md-3 d-flex align-items-stretch">
            <div class="card mb-3 w-100 position-relative">
            <img src="${arrayOfProducts[i]?.imageUrl}" class="card-img-top" alt="product image" width="200px" height="200px">
            <div class="card-body">
            <h5 class="card-title d-flex justify-content-between">
                <span>${arrayOfProducts[i]?.name}</span>
                <span class="fw-bolder text-success">${arrayOfProducts[i]?.price}</span>
            </h5>
            <p class="card-text">${arrayOfProducts[i]?.category}</p>
            <p class="card-text mb-5">${arrayOfProducts[i]?.describtion}</p>
            <div class="position-absolute" style="bottom:10px">
                <a href="index.html?id=${i}" type="button" class="btn btn-warning" >Update</a>
                <button onclick="deleteProduct(${i})" type="button" class="btn btn-danger" >Delete</button>
            </div>
        </div>
    </div>
</div>`      
        }
    }        
    document.getElementById("ProductBody").innerHTML=cartoona;
    
    if(cartoona.length>0)
        document.getElementById("noProducts").style.display='none'
    else 
        document.getElementById("noProducts").style.display='block';
    
}



