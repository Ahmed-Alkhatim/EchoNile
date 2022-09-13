import { Header, Footer, Container } from "../components"
import { Blog, OtherBlog, OtherBlogs } from "./component"
import member from "../images/user.png"
import dr from "../images/dr.jpg"
import "./blog.css";
import image from  "../images/shop.jpg";
import { useParams } from "react-router-dom";

const blogssData = [
    {title : "Responding to Climate Change in Sudan", discription : `Responding to the challenge of climate change is a national priority for Sudan. Impact of
    climate change is already affecting rural communities, natural resources, agricultural
    productivity and coastal infrastructure. `,  memberName : "Dr. Ismail Elgizouli", 
    content : [
    { title : "", 
    paragraphs : [`Responding to the challenge of climate change is a national priority for Sudan. Impact of
        climate change is already affecting rural communities, natural resources, agricultural
        productivity and coastal infrastructure. The increasing frequency of severe droughts and
        declining rainfall are already an urgent priority, which requires immediate action in
        cooperation with international community.`, `The Government of Sudan signed and ratified the United Nations Framework Convention on
        Climate Change (UNFCCC) in 1993, Kyoto Protocol (KP) 2005 and Paris Agreement (PA)in
        2015. Sudan is an active member at UNFCCC negotiations and contribute to Intergovernmental
        Panel on Climate Change (IPCC) meetings and publications. The Higher Council for
        Environment and Natural Resources (HCENR) under Prime Minister Office is the designated
        authority for all environment and natural resources issues. It is the focal point to both UNFCCC
        and IPCC.`, `Since 1997 Sudan has started to develop various climate change-related policies, strategies,
        projects and programs to effectively cope with climate change challenges and embark into a
        low-carbon climate resilient development. This includes: Environment Protection Act (EPA,
        2001); Initial National Communication (INC2003); Renewable Energy Master Plan (REMP,
        2005); Sudan National Action Programme to Combat Desertification (SNAP, 2006); Forestry
        Policy (FOP, 2006); National Adaptation Program of Action (NAPA, 2007); National Plan for
        Environmental Management (NPEM, 2008); National Water Supply and Sanitation Policy
        (WASH, 2009); Strategic Plan for the National Malaria Control Programme (SPNMCP, 2010);
        National Clean Development Mechanism Strategy (NCDMS, 2011); National Investment Plan
        for the Agricultural Sector (NAIP, 2016); Second National Communication (SNC, 2013);
        Technology Needs Assessment for Adaptation and Mitigation (TNA-A and TNA-M, 2013);
        Nationally Appropriate Mitigation Action (NAMA, 2015); National Biodiversity Strategy and
        Action Plan (NBSAP, 2015); Intended Nationally Determined Contribution (INDC, 2015);
        National Adaptation Plan (NAP, 2016); Sudan First State of Environment and Outlook Report
        2020 ; Emission Reduction of REDD+Programme of Blue Nile, Sinnar and Gedarif States
        November 2020 and Mainstreaming of REDD+ in National Development Plan, Policies
        Strategies and Legislation for Sudan (April 2021) .Also there are many climate change projects
        under different stages of implementation .`
    ] 
    },
    {
        title : "Gaps and Constraints",
        paragraphs : [`Despite the determination and the commitment of the GoS to address climate change issues,
        there are still important challenges that need to be addressed to effectively steer the
        development of the country toward a low-carbon climate resilient trajectory. These challenges
        include among others:`,`- Lack of reliable data and information. Sudan is facing important challenges in respect to
        availability and reliability of data and information for decision making. When available, the
        data are neither up to date nor statistically robust, and usually relies on extrapolation or
        interpolation.`, `-Limited human and institutional capacity. While some good expertise on climate change exists
        both within the government and among other relevant stakeholders, the very dynamic flow of
        knowledge and techniques that go along with climate change issues suggest the need to further
        strengthen human and institutional capacity, especially at the State level, for more effective
        climate change mainstreaming into development planning.`,`-Lack of mutually reinforcing actions across State and national levels of government. Sudan
        has a federal system of political governance. There are several levels within this governance
        system that are perceived as broad constraints to collaborative action between the federal and
        state levels, including power sharing arrangements, and institutional coordination protocols..
        -Leveraging private sector investment in climate change adaptation and mitigation projects is
        very limited Public-private sector partnership is very weak`,`-It has been often noted that Sudan strategic planning is sectorial in nature, led by limited
        groups of politicians and a few professionals, never based on wide grassroots consultations and
        often subjected to poor implementation`,`-. A limited effort has been spent to foster awareness of climate risks to food security.`, `- Government institutions are subject to frequent changes due to political instability and this
        has resulted in limited incorporation of multilateral environmental agreements such as the
        UNFCCC`]
    },
    {
        title : "Polices",
        paragraphs : [`Several policy issues were identified during the implementation of climate change projects and
        studies to fill the above gaps and uplift the constraints . The following are the major policy
        recommendations:`,`- Mainstreaming climate change adaptation and mitigation in the national and states
        development plans`,`- Provision of political support for the climate change adaptation and mitigation at the
        national and State level.`,`- Updating and activating the environmental policies and legislation.`,`- Transparency, responsibility and accountability should be emphasized.`,
        `- Policies for water resources management to emphasize water harvesting, efficient and
        sustainable utilization of water resources to stress provision of safe potable water for rural,
        urban and nomadic populations.`,
        `- Strategies and policies should guarantee food security.`,`- A national land use plan should be adopted.`,
        `- Poverty reduction should be included in the adopted plans.`,`- Encourage sustainable use of natural resources.`,
        `- Adopt best practices to conserve biodiversity and vegetation cover and combat
        desertification`,`- Introduce technical packages in agriculture that could help to build resilience and enhance
        adaptation to climate change (water harvesting, drought resistant varieties, shelterbelts, etc).`,`- Document and promote indigenous knowledge adaptation practices and encourage exchange
        of experience between the States.Policies to support modernization and development of the agricultural and livestock systems`,`- Avail microcredit for small farmers and pastoralists`,
        `- Strengthen the role of extension and awareness in all adaptation and mitigation processes
        (awareness adaption and mitigation and learning mechanisms and identifying and promotion
        of best practices).`,`-Introduce renewable energy technologies for irrigation to mitigate climate change and to
        achieve sustainable development`,`- Support the involvement of research in adaptation and mitigation activities.`,`- Establish community-based organizations (CBOs) and ensuring the active participation of communities in all phases of adaptation planning and implementation.`,
        `Undertake concerted efforts to achieve effective horizontal and vertical coordination
        between all the stakeholders (Climate Change Unit at HCENR, line ministries at
        the national and State levels, the CBOs, and the local leaders).`,`- Empower women through their active participation.`,`- Capacity Building of all stakeholders.`,`Establish a national early warning system, and assist in establishing community based
        local early warning systems`,`-There is a need to leverage private sector investment in climate change adaptation
        and mitigation projects through inclusive value chain and market-based approaches so that
        value chain actors, such as micro, small and medium size enterprises could be rewarded and
        incentivized to protect and improve their productive assets (forest, water, land, etc.), whilst
        generating ecosystem services for the local community`, `-There is a need to forge and strengthen public-private partnership to complement top-down
        upstream policy and regulatory measures with downstream bottom-up financial and viable
        business approaches for scaling up climate change adaptation and mitigation measures to
        benefit the local community and to generate long-term and transformative impacts. This will
        help build trust and confidence and breakdown any unintended ‘silo’ mentality between the
        public and private sector`]
    }], memberImage : dr , memberPosition : "Member", date : "March  2022"},

    {title : "Climate Change Causes", discription : `The atmosphere contains 78% of nitrogen, 20% oxygen, and
    less than 2% of greenhouse gases. The Greenhouse gases
    contain 97% of water vapor, 1.45% of volcanic activity,
    1.45%of ocean biological activity and 0.10% of human
    activities.`, content : [
        { title : "Greenhouse Gases (GHGs):", 
        paragraphs : [`The atmosphere contains 78% of nitrogen, 20% oxygen, and
        less than 2% of greenhouse gases. The Greenhouse gases
        contain 97% of water vapor, 1.45% of volcanic activity,
        1.45%of ocean biological activity and 0.10% of human
        activities.`, `Human activity gases 64% carbon dioxide, 19% methane,
        6% nitrogen oxide, 6%fluorochlorcarbon and 5% other
        halocarbons. As a result of these gases the average global
        earth temp. is about 15Co . Without these gases it would
        have been (-18Co). In Mars temp is (-50Co) as there are no
        GHGs in the Atmosphere. In Venus temp is about (420Co) as
        96% of the Atmosphere is carbon dioxide. The increase of
        these gases in the past 100 years is responsible of what we
        call global warming which is a natural phenomena`] 
        }, 
        { title : "Sources of Greenhouse Gases (GHGs):", 
        paragraphs : [`The Intergovernmental Panel on Climate Change (IPCC) identified five
        sources that causes the GHGs emission which includes`,`1. Energy.`,`
        2. Industry.`,`
        3. Agriculture.`,`
        4. Land use changes and forestry.`,`
        5. Waste`]
        }, 
        { title : "Impact of Climate Change:", paragraphs : [`
        1. Health `,`
        2. Water resources`,`
        3. Agriculture`,`
        4. Coastal zoned`,`
        5. Forests`,`
        6. Natural areas.`]
        }, 
        { title : "Solutions:", paragraphs : [`A. Mitigation is any measures that are taken or adopted to reduce the
        GHGs emission. Mitigation can be policies, technology, changing in
        behavior. Examples for mitigation is the use of clean energy (wind and
        solar), planting of trees, use of biofuels, use of mass transportation such
        as buses and trains`,`B. Adaptation is a change in the natural ecosystem and communities in
        response to climate change. Adaptation can either be through
        minimizing the hazards of climate change or adapting to the hazards.
        Examples of adaptation measures such as water harvesting techniques,
        planting of crops that bear heat stress and water shortage changing of
        agricultural practices.`]
        }
    ], memberName : "Rehab Ahmed Hassan", memberImage : member , memberPosition : "Co-Founder"},
]

const Blogs = () => {

    return(
        <>
        <Header theme={"navigator-dark"}/>
        <div className="blogs page">
            <Container>
            <h2 className="page-header blog-header">Blog</h2>
            <Blog data = { blogssData[0] } />
            <OtherBlogs data = { blogssData.slice(1,4) } />
            </Container>
        </div>
        <Footer />
        </>
    )
}
const BlogView = () => {
    const { id } = useParams()
    let blog = blogssData[id - 1]
    return(
        <>
        <div className = "view page" >
            <Header theme={"navigator-dark"}/>
            <Container>
                <div className="img-container ">
                    <img src={ image } alt="course" />
                </div>
                <div className="writer">
                    <div className = "img-container">
                    <img src= {blog.memberImage} alt="writer" />
                    </div>
                    <div >
                        <div className="writer-det">
                            <h3>{ blog.memberName}</h3>
                            <p>{ blog.memberPosition}</p>
                        </div>
                    </div>
               </div>
                <div className="view-details">
                    <h2 className="head-marg">{blog.title}</h2>
                    {blog.content.map(( section ) => {
                        let paragraphs = section.paragraphs.map( paragraph => <p>{paragraph}</p>)
                        return(
                            <>
                            <h4>{section.title}</h4>
                            {paragraphs}
                            </>
                        )
                    }
                    )}
                </div>
                {/* <div className="img-container img-container-more">
                    <img src={ image } alt="course" />
                </div> */}
            </Container>
        </div>
        <Footer />
        </>
    )
}

export { Blogs, BlogView }