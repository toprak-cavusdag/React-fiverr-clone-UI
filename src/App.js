import './App.css';
import Navbar from './components/navbar/Navbar'; // I THINK THIS IS BUG (NOT ERROR)
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import myGigs from './pages/myGigs/myGigs.jsx';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages.jsx';
import Message from './pages/message/Message.jsx';

function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },

        {
          path: '/gigs',
          element: <Gigs />,
        },

        {
          path: '/gigs/:id',
          element: <Gig />,
        },

        {
          path: '/orders',
          element: <Orders />,
        },

        {
          path: '/my-gigs',
          element: <myGigs />,
        },

        {
          path: '/add',
          element: <Add />,
        },

        {
          path: '/Messages',
          element: <Messages />,
        },

        {
          path: '/message',
          element: <Message />,
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eum
        quisquam et ipsa autem vero odit veritatis quos ex necessitatibus
        expedita dicta illo recusandae modi placeat optio eos esse reiciendis
        aperiam enim laboriosam, deleniti quasi voluptates? Atque beatae vel
        odio quos, cupiditate ex. Dolore, tempore optio numquam ratione minus
        laboriosam harum soluta doloremque facere eum quos eaque quisquam,
        doloribus quae suscipit minima exercitationem officia autem voluptates
        possimus eligendi dignissimos. Facere voluptatum placeat inventore
        dignissimos, explicabo cupiditate tenetur magnam commodi error molestias
        ut voluptatibus aperiam nihil voluptatem laborum ipsam quo officia
        architecto itaque repellat eos vitae veniam suscipit! Fugiat accusamus,
        omnis pariatur reprehenderit libero adipisci vel eos unde dolores ab
        aspernatur illo ea culpa eveniet sed enim porro quos tempora autem vero.
        Velit aliquid enim quo! Similique a nobis quibusdam impedit obcaecati
        eveniet natus quos laboriosam praesentium minus animi cumque nostrum,
        explicabo voluptatibus numquam molestias facere pariatur delectus
        perferendis sapiente ipsum. Architecto aliquid impedit minima veniam
        officiis inventore vel, voluptas ipsum culpa tenetur cumque magnam?
        Tempore officia natus temporibus ullam cumque, explicabo, provident
        nostrum dolorem, minima est voluptatum dicta odio harum ad nihil neque
        vel numquam eaque quo quod? Voluptates neque consectetur assumenda
        exercitationem voluptate laborum corporis itaque unde magnam cum aliquam
        dolore harum saepe ut architecto cupiditate voluptatem fugiat, obcaecati
        consequatur iure soluta id explicabo libero eaque! Eum laudantium,
        asperiores quod ipsum eveniet nulla perferendis iusto, odio quisquam
        mollitia sed vero! Labore sequi atque quos quia assumenda nobis. Facere
        vel, eum repellendus ullam cumque similique, illo iure laborum, eveniet
        libero nam et laudantium qui. Eius aliquid nihil ut, rerum id, voluptate
        ullam ab amet eaque ducimus consequatur accusamus maiores, temporibus
        consequuntur alias quisquam impedit excepturi asperiores blanditiis
        dolorem veniam? Quaerat accusantium similique aut dolores soluta! Iusto
        voluptate ratione veniam quis aut natus officia saepe ad, fugiat
        veritatis voluptatibus doloremque a? Vitae nulla porro, assumenda
        adipisci inventore magni accusantium aliquid temporibus consequuntur
        magnam veritatis cum quibusdam quas odio unde dolorem pariatur quaerat
        dignissimos libero optio perspiciatis amet esse. Molestiae in excepturi
        magnam! Soluta, quidem sit sunt harum facilis numquam similique nobis?
        Obcaecati, iste sit natus officia nihil sapiente facere corrupti ex est
        nesciunt. Nemo id, eos magnam esse dignissimos delectus aliquam alias,
        dolores doloremque veniam, eum facilis! Odit voluptatibus in ut ad
        numquam commodi assumenda tempora facilis quibusdam perspiciatis, sunt
        explicabo beatae accusamus. Magni praesentium repellat perferendis
        tempore sit voluptatem odio animi nemo, quo assumenda est.
        Necessitatibus, ad aperiam? Iusto alias officiis perferendis
        perspiciatis repellat! Fugit, odio. Debitis vitae ratione repellendus
        cupiditate ipsa necessitatibus? Deserunt quam nihil repellendus? Cumque
        ratione beatae natus vitae perferendis reiciendis voluptate nisi
        consequatur. Incidunt amet soluta sequi. Sint, in tempora mollitia
        itaque harum aliquid quam nihil beatae repellendus voluptate ipsum
        delectus adipisci? Neque magni optio facere sed ex nulla, sint
        voluptates aut nesciunt autem praesentium odit sit cum. Odio sunt ipsam
        provident vel modi quasi sint molestiae quia recusandae adipisci eaque
        iste eos, mollitia autem reprehenderit veniam nemo consequuntur
        laboriosam. Dolor dolorum possimus quidem, qui architecto quas
        reprehenderit explicabo, tempora, sapiente dignissimos doloribus porro
        voluptates consequuntur suscipit adipisci sunt culpa quos cumque
        corporis? Aut enim nulla similique fugiat nihil libero distinctio eum
        quibusdam dolorem quos voluptatum fuga veniam possimus porro, facere
        doloribus natus incidunt. Quas tempora dolorem rerum culpa eum nam
        provident repellat aliquid dolorum quis. Odio, est officiis nam id
        quidem maxime quae ad error earum odit nihil vitae tempore autem
        voluptatem magnam rem quo dolorum assumenda, unde excepturi. Et alias
        nemo perferendis voluptate accusantium itaque laborum consectetur
        eligendi! Quam, repellendus aut! Voluptatum voluptates quos corporis
        cupiditate eaque praesentium facere, perspiciatis quidem aliquid optio
        itaque quas molestias, veritatis nesciunt reiciendis ducimus. Illo
        obcaecati, itaque modi quod similique reiciendis ad quibusdam ex
        suscipit natus nesciunt nemo facilis eligendi neque nihil quas ullam
        magni aspernatur! Odit dolore deleniti veniam numquam, ea aliquam
        assumenda quis ipsa voluptatibus reiciendis nihil aut. Molestias aliquam
        odio provident mollitia ducimus officiis, tempore sint, aperiam dolores,
        repellat fugiat iure dolor distinctio temporibus! Molestias ullam
        repellendus culpa cum maiores nostrum deleniti? Unde ea exercitationem
        adipisci atque officiis ducimus reprehenderit architecto sapiente maxime
        iste, autem eaque optio voluptatem! Unde dolorum nihil laboriosam odio
        recusandae dolorem dignissimos, tempore vero sapiente, architecto
        adipisci veritatis, esse rem voluptatum alias? Numquam, adipisci quas.
        Laudantium, porro quas eum quam natus assumenda nisi eos maxime velit
        voluptas ipsam expedita, dolor ipsum? Sit quaerat aliquam pariatur, eos
        reprehenderit distinctio autem, doloremque repudiandae expedita nulla
        quos officia consectetur, esse maiores harum! Quod placeat, dolorum,
        exercitationem voluptatem ut voluptatum porro numquam dicta molestiae
        deserunt praesentium. Porro nulla distinctio quasi odio quod magnam,
        iste reiciendis ullam dicta similique qui enim quae, libero omnis hic
        dolore voluptas maiores reprehenderit cumque doloribus quidem ratione?
        Provident architecto, sed consequuntur et aperiam, pariatur eius iste
        quisquam modi omnis voluptatibus praesentium a. Distinctio maiores
        eveniet ab iure eligendi deleniti, reiciendis sapiente assumenda
        voluptates ratione minus minima amet dolorem quidem cum, vitae rerum
        dignissimos magnam! Molestias, natus? Explicabo iure earum natus quidem
        incidunt in eveniet provident. Dignissimos dolorum recusandae saepe
        architecto dolorem ab quos deserunt magni rerum sit? Explicabo incidunt
        necessitatibus amet natus non eligendi aut earum in illo doloribus,
        quibusdam laboriosam perspiciatis molestiae. Ipsam nulla voluptatem
        fugit inventore necessitatibus assumenda eos magnam. Itaque dolor id sit
        nisi laboriosam praesentium deserunt accusantium nemo libero? Cum neque
        aut ea nesciunt quod omnis ab impedit consectetur est ipsam? Minus
        quisquam vitae temporibus suscipit at quaerat, iure optio quibusdam
        autem quasi minima modi voluptates doloremque est unde voluptate officia
        in. Maiores nulla veritatis ipsam dicta soluta iste eius, delectus
        doloremque consequatur fugit porro ad illo ex corporis repellat rerum,
        id similique unde illum veniam enim voluptate harum cumque earum? Alias
        corporis culpa dicta porro deserunt consectetur vitae voluptates,
        eligendi, fugiat velit dignissimos ex placeat obcaecati delectus
        similique. Sapiente exercitationem numquam eum voluptatum cumque
        molestiae ipsum iure aut consequatur maiores aspernatur perspiciatis,
        quos sequi quo ipsam animi placeat dolor, aliquam natus aperiam, amet
        asperiores magni. Obcaecati quaerat suscipit tempore, laboriosam sint
        corporis esse facilis explicabo ipsam aperiam minus commodi, at aut,
        facere ex consectetur. Ipsum voluptate mollitia recusandae aliquid
        deleniti temporibus, molestias delectus quo quis.
      </p>
    </div>
  );
}
export default App;
