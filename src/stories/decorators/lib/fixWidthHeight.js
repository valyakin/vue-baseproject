export default (width, height) => function () {
  return {
    render (h) {
      return (
        <div style={{
          minWidth: `${width}px`,
          maxWidth: `${width}px`,
          hidth: `${width}px`,
          minHeight: `${height}px`,
          maxHeight: `${height}px`,
          height: `${height}px`,
        }}>
          <story/>
        </div>
      )
    },
  }
}
