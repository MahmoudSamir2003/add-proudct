
let prductName=document.getElementById("prductName");
let productPrice=document.getElementById("productPrice");
let productCategory=document.getElementById("productCategory");
let productDescription=document.getElementById("productDescription");
let uploaded_image=''
let arrayOfProducts
let productImage=document.getElementById("productImage");
let url=window.location.href;
productImage.addEventListener("change",function(){
    const reader=new FileReader();
    reader.addEventListener("load",function(){
        uploaded_image=reader.result;
        document.getElementById("displayedImage").style.backgroundImage=`url(${uploaded_image})`
    })
    reader.readAsDataURL(this.files[0]);
})
    if(localStorage.getItem("products")===null){
        arrayOfProducts=[];
    }
    else{
        arrayOfProducts=JSON.parse(localStorage.getItem("products"));
    }


function addProduct(){
    let product={
        name:prductName.value,
        price:productPrice.value,
        category:productCategory.value,
        describtion:productDescription.value,
        imageUrl:uploaded_image
    }
    if( mainBtm.innerHTML == "Update"){
        mainBtm.innerHTML = "Add Product";
        arrayOfProducts.splice(mainIndex,1,product);
    }
    else{
        arrayOfProducts.push(product);
    }
    localStorage.setItem("products",JSON.stringify(arrayOfProducts));
    clearInpust();
    window.location='products.html';
}


function clearInpust(){
    prductName.value='';
    productCategory.value='';
    productPrice.value='';
    productDescription.value=''
    productImage.value=''
}

if(url.indexOf("id") > -1){
    updateProduct(url.substr(url.length-1,1))
}

function updateProduct(index){
    prductName.value = arrayOfProducts[index].name;
    productPrice.value =arrayOfProducts[index].price;
    productCategory.value = arrayOfProducts[index].category;
    productDescription.value = arrayOfProducts[index].desc;
    mainIndex=index
    mainBtm.innerHTML="Update"
}
