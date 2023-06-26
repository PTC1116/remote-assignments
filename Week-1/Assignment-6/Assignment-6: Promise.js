function delayedResultPromise(n1, n2, delayTime) {
  let result = n1 + n2;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, delayTime);
  });
  return promise;
}
delayedResultPromise(4, 5, 3000).then(console.log);
// 9 (4+5) will be shown in the console after 3 seconds
