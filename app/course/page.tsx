//pages/index.js
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { StatCard } from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import Uglogo from '@/components/uglogo';
// import { getRecentAppointmentList } from "@/lib/actions/appointment.actions";


const home = async() => {
  //  const appointments = await getRecentAppointmentList();
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
        <Uglogo className='h-8 w-fit' imgSrc='' />
        </Link>

        <p className="text-16-semibold">Courses</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Register your courses here 
          </p>
        </section>

        {/* <section className="admin-stat">
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled appointments"
            icon={"/assets/icons/appointments.svg"}
          />
          <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending appointments"
            icon={"/assets/icons/pending.svg"}
          />
          <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled appointments"
            icon={"/assets/icons/cancelled.svg"}
          />
        </section> */}

        {/* <DataTable columns={columns} data={appointments.documents} /> */}
      </main>
    </div>
  );
}
export default home;





 
