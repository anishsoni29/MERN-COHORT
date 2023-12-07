function isAnagram(str1, str2) {
  //removing spaces and converting to lowercase for case-insensitive comparision
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  //sort the characters and compare the sorted lists
  const sortedList1 = cleanStr1.split("").sort().join();
  const sortedList2 = cleanStr2.split("").sort().join();

  //check if the sorted strings are equal
  return sortedList1 == sortedString2;
}

module.exports = isAnagram;
