from flask import Flask, render_template, request, redirect, url_for, session # type: ignore

app = Flask(__name__)
app.secret_key = 'your_secret_key'
application = app

# Sample product data
products = [
    {'name': 'Smartphone', 'price': 300, 'image': './static/images/phone-screens.jpeg'},
    {'name': 'mouse', 'price': 800, 'image': './static/images/Wired-Keyboard.jpeg'}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/products')
def products_page():
    return render_template('products.html', products=products)

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')


@app.route('/add_to_cart/<string:product_name>')
def add_to_cart(product_name):
    product = next((item for item in products if item['name'] == product_name), None)
    if product:
        if 'cart' not in session:
            session['cart'] = []
        session['cart'].append(product)
    return redirect(url_for('cart'))

@app.route('/remove_from_cart/<string:product_name>')
def remove_from_cart(product_name):
    if 'cart' in session:
        session['cart'] = [item for item in session['cart'] if item['name'] != product_name]
    return redirect(url_for('cart'))

@app.route('/request_repair', methods=['POST'])
def request_repair():
    device = request.form['device']
    issue = request.form['issue']
    # You can handle the request (e.g., send an email or store it in a database)
    return "Repair request submitted for {} with issue: {}".format(device, issue)

if __name__ == '__main__':
    app.run(debug=True)


