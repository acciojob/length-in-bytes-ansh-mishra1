const byteSize = (str) => {
  // write your code here
	const Blob = {
		size: str.length
	}
	return Blob.size;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));

