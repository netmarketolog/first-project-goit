function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value1");
animateValue(obj, 0, 721, 4000);

const obj2 = document.getElementById("value2");
animateValue(obj2, 0, 16, 4000);

const obj3 = document.getElementById("value3");
animateValue(obj3, 0, 84, 4000);