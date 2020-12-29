function Layout2(props) {
  return (
  <>
    <style jsx>{`
      .layout-2 {
        width: 100%;
        min-height: 100vh;
        background-color: #00bcd4;
        font-family: Sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: middle;
        padding: 5rem;
        box-sizing: border-box;
      }
    `}</style>
    <div className='layout-2'>
      { props.children }
    </div>
  </>
  );
};

export default Layout2;
