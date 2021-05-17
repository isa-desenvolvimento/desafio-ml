const ForeverPage = () => (
    <div className="page">
        <p>testando uma pagina</p>
    </div>
)

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 5000)
    })
    return { props: {} }
}

export default ForeverPage