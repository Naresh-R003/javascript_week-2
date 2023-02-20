let arr = [10,20,30,40,50,60]; 
console.log("Given List "+arr);

let startIndex = 0;
let endIndex = arr.length-1;
let searchElement = 40;
console.log("Search element :12521316")
binarySearch(arr,startIndex,endIndex,searchElement)
function binarySearch(arr,startIndex,endIndex,searchElement){
    if(startIndex>endIndex){
        console.log("element not found");
        return false;
    }

    let mid = Math.floor((startIndex+endIndex)/2);
    if(searchElement == arr[mid]){
        console.log("Element found at the position : "+mid);
        return true;
    }
    else{
    if(searchElement < arr[mid]){
            return binarySearch(arr,startIndex,mid-1,searchElement);
        }

    else if(searchElement > arr[mid]){
            return binarySearch(arr,mid+1,endIndex,searchElement);
        }
    }
    
}
