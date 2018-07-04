export default () => ({
  render (h) {
    return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'auto',
    }}>
      <div style={{
        margin: 'auto',
      }}>
        <story/>
      </div>
    </div>
    )
  },
})
