<script>
	import qrcode from '$assets/about/qrcode.svg';
	import menu from '$assets/about/menu.svg';
	import chef from '$assets/about/chef.svg';
</script>

<main class="flex flex-col items-center gap-5 text-xl mb-16">
	<section class="box-border w-[100%] bg-dark-15 p-10 flex flex-col gap-8">
		<div class="text-secondary text-5xl font-bold">About Rateaurant</div>
		<div>
			Rateaurant is a one-stop-shop for all your restaurant needs, whether
			you're a customer or an owner. Rateaurant is a revolutionary platform
			designed to enhance the food ordering and restaurant management
			experience. With a focus on improving customer convenience and reducing
			human effort.
		</div>
	</section>
	<section class="w-[100%] bg-dark-15 p-10 flex flex-col gap-8">
		<div class="text-secondary text-5xl font-bold">What we offer</div>
		<ul class="flex lg:flex-row lg:items-stretch items-center flex-col gap-10">
			<li
				class="bg-dark-20 box-border w-[100%] lg:w-[33%] p-4 flex flex-col items-center text-2xl text-center gap-10">
				<img src={qrcode} alt="QRCode being scanned by a phone" />
				QR codes at restaurant tables to introduce customers to the Rateaurant app
			</li>
			<li
				class="bg-dark-20 box-border w-[100%] lg:w-[33%] p-4 flex flex-col items-center text-2xl text-center gap-10">
				<img src={menu} alt="A digital menu" />
				A menu system for customers to browse and order
			</li>
			<li
				class="bg-dark-20 box-border w-[100%] lg:w-[33%] p-4 flex flex-col items-center text-2xl text-center gap-10">
				<img src={chef} alt="A chef getting a notification" />
				Automatic notifications to kitchen staff for each order, along with table
				numbers
			</li>
		</ul>
	</section>
	<!-- <section class="box-border w-[100%] bg-dark-15 p-5 flex flex-col gap-8">
		<div class="text-secondary text-5xl font-bold">Plus</div>
		<div>
			Plus, we display the total bill so far, so you can keep track of your
			spending and budget accordingly.
		</div>
	</section> -->
</main>
