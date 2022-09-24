<!-- The button to open modal -->
<label for="add-supply-modal" class="btn btn-wide modal-button">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
	</svg>
	Add supply</label
>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="add-supply-modal" class="modal-toggle" />
<div class="modal">
	<form on:submit|preventDefault class="modal-box">
		<h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
		<p class="py-4">
			You've been selected for a chance to get one year of subscription to use Wikipedia for free!
		</p>
		<div class="modal-action">
			<label for="add-supply-modal" class="btn">Yay!</label>
		</div>
	</form>
</div>
