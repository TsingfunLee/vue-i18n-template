// 判断图片分辨率
export function checkImageResolution(target, width, height) {
  return new Promise((resolve, reject) => {
    if (target instanceof File) {
      let img = new Image()
      img.src = window.URL.createObjectURL(target)

      img.onload = function (e) {
        if (e.target.width > width || e.target.height > height) {
          reject()
        }

        resolve()
      }
    } else {
      throw Error('参数不是文件类型')
    }
  })
}

// 判断音频时长
export function checkAudioDuration(target, duration) {
  return new Promise((resolve, reject) => {
    if (target instanceof File) {
      let url = window.URL.createObjectURL(target)
      let audio = new Audio(url)

      audio.addEventListener('loadeddata', () => {
        if (audio.duration > duration) {
          reject()
        }

        resolve()
      })
    } else {
      throw Error('参数类型不是文件类型')
    }
  })
}
