function delayedResultPromise(n1, n2, delayTime) {
  let result = n1 + n2;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, delayTime);
  });
  return promise;
}

async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  const result = await delayedResultPromise(4, 5, 3000);
  console.log(result);
}
main(); // result will be shown in the console after <delayTime> seconds
