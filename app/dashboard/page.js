

export default function DashboardPage() {
  return (
    <div className="text-center flex flex-col justify-center items-center gap-40">
      <h1>DashboardPage</h1>

      <section className="w-52 h-60 bg-red-500" id="red">
        <div>section 1</div>
      </section>

      <section className="w-52 h-60 bg-blue-500" id="blue">
        <div>section 2</div>
      </section>

      <section className="w-52 h-60 bg-green-500" id="green">
        <div>section 3</div>
      </section>
    </div>
  )
};