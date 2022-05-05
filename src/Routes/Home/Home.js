import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import useProducts from '../../hooks/useProducts';
import Card from '../Card/Card';
import banner from './banner.jpg';
import PageTitle from '../../Pages/PageTitle/PageTitle';
import Loading from '../../Shared/Loading/Loading';

const Home = () => {
    const navigate = useNavigate();
    const [products] = useProducts();

    const featuresForTechnicalSpecifications = [
        { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
        { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
        { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
        { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
        { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
        { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
    ];

    const featuresForTransactions = [
        {
            name: 'Competitive exchange rates',
            description:
                'For online transfers initiated through MyFD, a blue “Show Expense Transfer” button is displayed at the top; click on this to see the original Expense Transfer form, including notes, reason for transfer, and audit trail.',
            icon: GlobeAltIcon,
        },
        {
            name: 'No hidden fees',
            description:
                'The original Expense Transfer can also be accessed without going through Transaction Detail by clicking the date reference in Transaction Summary or Reconciliation (in Transaction Summary the date is prepended with a "TX:").',
            icon: ScaleIcon,
        },
        {
            name: 'Transfers are instant',
            description:
                'Item names, shown in blue along the left hand side of the report, are links to the MyFD Glossary; glossary entries provide additional explanation of the field as well as possible values.',
            icon: LightningBoltIcon,
        },
        {
            name: 'Mobile notifications',
            description:
                'The Value column displays the specific value for that transaction, followed by the Value Description; values and descriptions will vary for each transaction.',
            icon: AnnotationIcon,
        },
    ]

    return (
        <div>
            <PageTitle title={'ladies fashion warehouse'}></PageTitle>
            {/* banner section */}
            <div className="py-12 overflow-y-hidden">
                <dh-component>
                    <div className="w-full px-6">
                        <div className="mt-8 relative rounded-lg bg-[#8c3e31] container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
                            <img className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="bg" />
                            <img className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="bg" />
                            <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight">Powerful clothes come from powerful person!</h1>
                            </div>
                            <div className="flex justify-center items-center mb-8">
                                <button onClick={() => navigate('/addItems')} className="hover:text-white hover:bg-transparent lg:text-xl hover:border-white border bg-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700	focus:ring-white rounded text-indigo-700 px-4 sm:px-8 py-1 sm:py-3 text-sm">Get Started</button>
                                <button onClick={() => navigate('/blog')} className="hover:bg-white hover:text-indigo-600 lg:text-xl hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-indigo-700 focus:ring-white hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">Learn More</button>
                            </div>
                            <p className='text-white text-center'>If you think your dresses are bad then my dresses are your dad!</p>
                        </div>
                        <div className="container mx-auto flex justify-center md:-mt-56 -mt-20 sm:-mt-40">
                            <div className="relative sm:w-2/3 w-11/12">
                                <img src={banner} alt="https://garryblack.com/blog/wp-content/uploads/2011/10/Ottawa_Model_Workshop11.jpg" className='rounded-lg mx-auto shadow' />
                            </div>
                        </div>
                    </div>
                </dh-component>
            </div>
            {/* services section */}
            <div className='bg-gray-400 py-4'>
                <h1 className='text-center text-6xl py-4'># Our Services {
                    (products.length === 0)
                    &&
                    <span className='ml-8'>
                        <Loading></Loading>
                    </span>
                }</h1>
                <hr className='w-36 mx-auto border-t-4 border-[#00a1e5]' />
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-0 px-2 md:gap-x-4 max-w-7xl mx-auto gap-y-12 py-12'>
                    {
                        products.slice(0, 6).map(product => <Card
                            key={product._id}
                            product={product}
                        ></Card>)
                    }
                </div>
                <div className='text-center'>
                    <button className="inline-flex items-center px-12 py-2 mt-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Link to={'/manageItems'}>See All Item</Link>
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
            {/* extra section 1 */}
            <section className="relative py-20 2xl:py-40 bg-gray-800 overflow-hidden">
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">The way how we store goods</h2>
                            <p className="mt-4 text-gray-500">
                                The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                                steel divider separates active cards from new ones, or can be used to archive important task lists.
                            </p>

                            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                                {featuresForTechnicalSpecifications.map((feature) => (
                                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                                        <dt className="font-medium text-gray-900">{feature.name}</dt>
                                        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                                className="bg-gray-100 rounded-lg"
                            />
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                                alt="Top down view of walnut card tray with embedded magnets and card groove."
                                className="bg-gray-100 rounded-lg"
                            />
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                                alt="Side of walnut card tray with card groove and recessed card area."
                                className="bg-gray-100 rounded-lg"
                            />
                            <img
                                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                                className="bg-gray-100 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* extra section 2 */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A better way to send money
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            The Transaction Detail is the information about a transaction that is able to be reviewed from multiple reports like Transaction Summary or Reconciliation reports. Click on the linked Description or the linked 6-digit Account Code in the Transaction Summary report or the Reconciliation report to drill down to the Transaction Detail. Users can create ad-hoc reports using the Query tool to retrieve the transaction detail fields for multiple transactions at once. The most common query to retrieve Transaction Detail data is the Transaction Summary reporting template in the Query tool.
                        </p>
                    </div>

                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            {featuresForTransactions.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;