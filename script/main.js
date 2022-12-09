remote_url = "githubraw.com/cree321/NFL-Planner/main/site_fragments/trip_create.html"

window.onload = (ev) => {
    // fetch("C:/Documents/project-1/NFL-Planner/site_fragments/trip_create.html")
    // .then((site_fragment) => {document.body.append(site_fragment)});
    document.body.innerHTML =
`<div id="input_col">
<h1>My Trip</h1>
<h2></h2>
<h4>Plan Summary</h3>
<table id="input_souvenir_table"><!--Select Souvenirs-->
    <tr>
        <th scope="col"> Item </th>
        <th scope="col"> Price </th>
    </tr>
    <tr>
        <th scope="row"> Demo Souvenir </th>
        <td> $ 20 </th>
    </tr>
    <tr>
        <th scope="row"> Another Souv </th>
        <td> $ 23 </th>
    </tr>
</table>
<input type="number" placeholder="Item Quantity" id="input_souvenir_number"><!--Select Souvenir Quantity to Purchase-->
</div>


<br>
<p3 id="label_distance">Distance Traveled: <span id="output_distance_text">#####</span> KM</p3><!--View Net Distance-->
<br><br><br><br>
<h4>My Receipt</h3>
<table id="output_receipt_table"><!--Verify Destinations-->
    <tr>
        <th scope="col"> Team </th>
        <th scope="col"> Stadium </th>
    </tr>
    <tr>
        <th scope="row"> Demo Team </th>
        <td> Demo Stadium </th>
    </tr>
    <tr>
        <th scope="row"> 49rs </th>
        <td> 49rs Stadium </th>
    </tr>
</table>
<p3>Plan Expenses: $ <span id="output_total_text">#####</span></p3><!--View Net Cost-->

<p>Plan another trip?</p>
<input type="button" id="input_proceed_button" value="Ok"><!--Create a Trip-->

<script defer>
input_souvenir_table = document.querySelector("#input_souvenir_table");
input_souvenir_number = document.querySelector("#input_souvenir_number");
output_distance_text = document.querySelector("#output_distance_text");
output_receipt_table = document.querySelector("#output_receipt_table");
output_total_text = document.querySelector("#output_total_text");
input_proceed_button = document.querySelector("#input_proceed_button");
</script>`;
};