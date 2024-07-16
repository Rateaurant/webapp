<script>
	import qrcode from '$assets/about/qrcode.png';
	import menu from '$assets/about/menu.png';
	import chef from '$assets/about/chef.png';
</script>

<main class="pt-24">
	<section class="bg-white-50 flex flex-col items-center text-center p-8 gap-4">
		<div class="font-bold text-4xl text-primary">About Rateaurant</div>
		<div aria-label="About Rateaurant" class="pl-8 pr-8 text-2xl">
			Rateaurant is a one-stop-shop for all your restaurant needs, whether
			you're a customer or an owner. Rateaurant is a revolutionary platform
			designed to enhance the food ordering and restaurant management
			experience. With a focus on improving customer convenience and reducing
			human effort.
		</div>
	</section>
	<section
		class="mt-24 bg-white-50 flex flex-col items-center text-center p-8 gap-5">
		<div class="font-bold text-4xl text-primary">What we offer</div>
		<div aria-label="Things we offer" class="flex items-center justify-center">
			<div class="flex flex-col gap-5 items-center box-border text-2xl w-1/3">
				<img src={qrcode} width={128} alt="QR Code" />
				<div>
					QR codes at restaurant tables to introduce customers to the Rateaurant
					app
				</div>
			</div>
			<div class="flex flex-col gap-5 items-center box-border text-2xl w-1/3">
				<img src={menu} width={128} alt="Digital Menu" />
				<div>A menu system for customers to browse and order</div>
			</div>
			<div class="flex flex-col gap-5 items-center box-border text-2xl w-1/3">
				<img src={chef} width={128} alt="Chef gets a notification" />
				<div>
					Automatic notifications to kitchen staff for each order, along with
					table numbers
				</div>
			</div>
		</div>
	</section>
</main>
