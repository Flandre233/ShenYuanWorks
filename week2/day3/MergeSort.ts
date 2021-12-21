const MergeArray = (nums1: number[], nums2: number[]): number[] => {
  let i = 0, j = 0, out: number[] = [];
  while (i < nums1.length || j < nums2.length) {
    if((nums1[i] && nums1[i] < nums2[j]) || !nums2[j]) {
      out.push(nums1[i])
      i ++
    } else{
      out.push(nums2[j])
      j ++
    }
  }
  return out
}

const MergeSort = ( nums:number[] ): number[] => nums.length > 1 ? MergeArray(MergeSort(nums.slice(0, Math.ceil(nums.length / 2))), MergeSort(nums.slice(Math.ceil(nums.length / 2)))) : nums

console.log(MergeSort([3,1,2,6,4,2,7,9,1,3,2,1,2,3,5,9,5,4,7,1]))
