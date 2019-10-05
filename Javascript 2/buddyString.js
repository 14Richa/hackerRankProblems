function is_unique(str) {
  var obj = {};
  for(var z=0;z<str.length;++z) {
    var ch = str[z];
    if(obj[ch]) return false; else obj[ch] = true;
  }
  return true;
}


function buddyStrings(A, B) {
	var count = 0;
	var a,b;
	if(A.length != B.length) return false;
	
	for(var i = 0; i < A.length ; i++){
		//console.log(count);
		if(A[i] != B[i])
		{
			count++;
			if(count == 1) a = i;
			else b = i;
		}
		//console.log(count);

	}
	if(count!=2 && count != 0) return false;
	else if(count == 0)
	{
		if(is_unique(A)) return false;
		else return true;

	}
	else
	{
		if(A[a] == B[b] && A[b] == B[a] ) return true;
		else return false;
	}

}

var ans = buddyString("aab","aab")
console.log(ans);