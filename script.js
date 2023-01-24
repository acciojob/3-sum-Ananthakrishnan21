function threeSum(arr, target) {
  //your code here
  arr.sort(function(a,b){return a-b})
  console.log(arr)
  let sum=Number.MAX_VALUE
  let ans=0
  for(let k=arr.length-1;k>=0;k--){
    let i=0;
    let j=i+1
    while(i<j && j<k){
      let currentSum=arr[i]+arr[j]+arr[k]
      if(currentSum==target){
        return target
      }
      else if(currentSum>target){
        
          if(currentSum-target<sum){
          sum=currentSum-target
          ans=currentSum
        }
        break
      }
      else{
        if(target-currentSum<sum){
          sum=target-currentSum
          ans=currentSum
        }
        j++
      }
    }
  }
  return ans
}

module.exports = threeSum;
