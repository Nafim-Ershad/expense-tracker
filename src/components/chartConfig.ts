// import { supabase } from '@/lib/supabaseClient'

export const data: any = {
  labels: [
    '00:00 AM',
    '01:00 AM',
    '02:00 AM',
    '03:00 AM',
    '04:00 AM',
    '05:00 AM',
    '06:00 AM',
    '07:00 AM',
    '08:00 AM',
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 AM',
    '13:00 AM',
    '14:00 AM',
    '15:00 AM',
    '16:00 AM',
    '17:00 AM',
    '18:00 AM',
    '19:00 AM',
    '20:00 AM',
    '21:00 AM',
    '22:00 AM',
    '23:00 AM'
  ],
  datasets: [
    {
      label: 'Income',
      backgroundColor: '#66ff66',
      data: []
    },
    {
      label: 'Expense',
      backgroundColor: '#ff3939',
      data: []
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}

// const { data: dateCreated, error } = await supabase.from('budgets').select('created_at')

// if (!error) {
//   dateCreated.forEach((date) => {
//     console.log(date.created_at)
//     console.log(new Date(date.created_at).getUT())
//   })
// } else {
//   alert(error)
// }
