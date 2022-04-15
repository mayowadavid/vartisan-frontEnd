const ClientAbout = ({userDescription}) => {
  return (
    <div className="about_client">
       <div dangerouslySetInnerHTML={{__html: userDescription}} />
    </div>
  )
}

export default ClientAbout