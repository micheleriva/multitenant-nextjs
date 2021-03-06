function Layout1(props) {
  return (
  <>
    <style jsx>{`
      .layout-1 {
        width: 100%;
        min-height: 100vh;
        background-color: #FF5722;
        font-family: Sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: middle;
        padding: 5rem;
        box-sizing: border-box;
      }
    `}</style>
    <div className='layout-1'>
      { props.children }
    </div>
  </>
  );
};

export default Layout1;
