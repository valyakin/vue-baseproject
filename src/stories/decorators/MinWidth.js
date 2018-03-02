export default minWidth => function () {
  return {
    render (h) {
      return (
      <div style={{
        minWidth: `${minWidth}px`
      }}>
        <story/>
      </div>
      )
    }
  }
}

