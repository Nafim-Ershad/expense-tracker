<template>
  <div class="wheel-container">
    <span class="wheel">
      <span class="throbber"></span>
      <span class="throbber2"></span>
      <span class="text-container">
        <p>Loading</p>
        <span>.</span><span>.</span><span>.</span>
      </span>
    </span>
  </div>
</template>

<style scoped lang="scss">
.wheel-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .wheel {
    position: relative;
    width: 120px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .throbber {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      aspect-ratio: 1;
      border-radius: inherit;
      z-index: -100;
      animation: rotate 3000ms ease-in-out infinite;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        aspect-ratio: 1;
        z-index: -100;
        background-color: black;
        transform: translate(-50%, -50%);
      }
    }
    .throbber2 {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      aspect-ratio: 1;
      border-radius: inherit;
      z-index: -100;
      animation: rotate2 3000ms ease-in-out infinite;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        aspect-ratio: 1;
        z-index: -100;
        background-color: black;
        transform: translate(-50%, -50%);
      }
    }
    .text-container {
      height: 100%;
      aspect-ratio: 1;
      border-radius: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 200;
      background-color: white;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotate2 {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}
</style>
