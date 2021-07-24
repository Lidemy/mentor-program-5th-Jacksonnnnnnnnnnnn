export const css = '.card {margin-top: 12px;}'

export function getForm(className, commentsClassName) {
  return `
  <div>
    <form class="${className}">
      <div class="form-group">
        <label>暱稱</label>
        <input type="text" name="nickname" class="form-control"">
      </div>
      <div class="form-group">
        <label>留言內容</label>
        <textarea name="content" class="form-control" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <div class="${commentsClassName}">
    </div>
  </div>
  `
}
export function getLoadMoreButton(className) {
  return `<button class="${className} btn btn-success">read more</button>`
}
