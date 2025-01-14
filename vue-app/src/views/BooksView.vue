<script>
export default {

}
</script>

<template>
    <section>
        <div class="card-container">
        <!-- Book Card 1 -->
        <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg" alt="Harry Potter and the Sorcerer's Stone">
            <div class="card-content">
                <h3 class="card-title">Harry Potter and the Sorcerer's Stone</h3>
                <p class="card-genre">Genre: Fantasy</p>
                <button>Read Description</button>
            </div>
        </div>

        <!-- Book Card 2 -->
        <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg" alt="To Kill a Mockingbird">
            <div class="card-content">
                <h3 class="card-title">To Kill a Mockingbird</h3>
                <p class="card-genre">Genre: Classic Fiction</p>
                <button>Read Description</button>
            </div>
        </div>

        <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg" alt="To Kill a Mockingbird">
            <div class="card-content">
                <h3 class="card-title">To Kill a Mockingbird</h3>
                <p class="card-genre">Genre: Classic Fiction</p>
                <button>Read Description</button>
            </div>
        </div>

        <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg" alt="To Kill a Mockingbird">
            <div class="card-content">
                <h3 class="card-title">To Kill a Mockingbird</h3>
                <p class="card-genre">Genre: Classic Fiction</p>
                <button>Read Description</button>
            </div>
        </div>

        <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg" alt="To Kill a Mockingbird">
            <div class="card-content">
                <h3 class="card-title">To Kill a Mockingbird</h3>
                <p class="card-genre">Genre: Classic Fiction</p>
                <button>Read Description</button>
            </div>
        </div>

        <div class="card">
            <img src="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg" alt="To Kill a Mockingbird">
            <div class="card-content">
                <h3 class="card-title">To Kill a Mockingbird</h3>
                <p class="card-genre">Genre: Classic Fiction</p>
                <button>Read Description</button>
            </div>
        </div>
    </div>
    </section>

</template>

<style>
section {
    font-family: Arial, sans-serif;       
    display:flexbox;
    align-items: center;
    min-height: 50vh;
    width: 800px;
}
        .card-container {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        .card {
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            width: calc((100% - 80px) / 3); /* Ensure 3 cards per row with gaps */
            transition: transform 0.2s, box-shadow 0.2s;
            max-width: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card-content {
            padding: 15px;
        }
        .card-title {
            font-size: 18px;
            font-weight: bold;
            margin: 0 0 10px;
            color: #333;
        }
        .card-genre {
            font-size: 14px;
            color: #555;
            margin-bottom: 15px;
        }
        .card button {
            background: #007bff;
            color: #fff;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            transition: background 0.2s;
        }
        .card button:hover {
            background: #0056b3;
        }

        @media (max-width: 768px) {
            .card-container {
                justify-content: center;
                margin-left: 0;
                padding-top: 80px;
            }
            .card {
                flex: 1 1 100%; 
                max-width: 150px;
            }
        }
</style>