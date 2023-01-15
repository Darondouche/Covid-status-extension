async function fetchData(){
    const res = await fetch("https://hpb.health.gov.lk/api/get-current-statistical");
    const record = await res.json();

    document.getElementById("date").innerHTML = record.data.update_date_time;
    document.getElementById("today_cases").innerHTML = record.data.local_new_cases;
    document.getElementById("total_deaths_LK").innerHTML = record.data.local_deaths;
    document.getElementById("total_deaths").innerHTML = record.data.global_deaths;

}

fetchData();