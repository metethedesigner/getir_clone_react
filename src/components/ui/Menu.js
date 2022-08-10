export default function Menu({title, items}) {
  return (
    <div>
        <section>
            <nav className='grid gap-y-4'>
              <h6 className='text-md text-primary-brand-color font-semibold'>{title}</h6>
              <nav>
                <ul className="grid gap-y-2">
                    {items.map((item, key) => (
                        <li key={key}>
                            <a href="#" className="text-sm hover:underline">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
              </nav>
            </nav>
        </section>
    </div>
  )
}
