function merge(nums1, m, nums2, n) {
	var j=0;
	for( var i = 0; i < nums1.length - 1; i++) {
		if(nums1[i] <= nums2[j]){
			continue;
		}
		else {
			var temp = nums1[i]
			//console.log(nums1[i]);
			nums1[i] = nums2[j]
			
			//console.log(nums2)
			nums2[j] = temp;
			console.log(temp);
			console.log(nums2);
			j++;


		}

	}

	return nums1;


}

console.log(merge([1,2,3,4], 4, [2,3,4], 3));