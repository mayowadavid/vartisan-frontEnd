const ClientAbout = ({description}) => {
  return (
    <div className="about_client">
       <div dangerouslySetInnerHTML={{__html: description}} />
    </div>
  )
}

export default ClientAbout