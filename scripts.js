async function fetchData(){
    const res = await fetch("https://hpb.health.gov.lk/api/get-current-statistical");
    const record = await res.json();

    document.getElementById("date").innerHTML = record.data.update_date_time;
    document.getElementById("cases").innerHTML = record.data.local_new_cases;
    document.getElementById("latestBy").innerHTML = record.data.local_new_deaths;
    document.getElementById("geathNew").innerHTML = record.data.local_recovered;

}