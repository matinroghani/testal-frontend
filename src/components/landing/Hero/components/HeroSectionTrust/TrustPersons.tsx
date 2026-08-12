import Image from "next/image";
import { customers } from "@/data/customers";

export default function TrustPersons() {
  return (
    <div className="flex flex-wrap items-center justify-center shrink-0">
      {customers.map((customer) => (
        <div 
          key={customer.id} 
          className="relative group -ml-4" 
        >
          <Image
            src={customer.avatar}
            alt={customer.name}
            width={40}
            height={40}
            className="
            rounded-full 
            ring-2 
            ring-white 
            hover:ring-[var(--color-brand-purple)] 
            transition-all 
            duration-300"
          />

          <span
            className="
              absolute
              top-full
              left-1/2
              -translate-x-1/2
              mt-3
              whitespace-nowrap
              rounded-lg
              bg-[var(--color-brand-purple)]
              px-3
              py-1.5
              text-xs
              text-white
              opacity-0
              invisible
              transition-all
              duration-200
              group-hover:opacity-100
              group-hover:visible
              z-10
              pointer-events-none
            "
          >
            {customer.name}
          </span>
        </div>
      ))}
    </div>
  );
}

