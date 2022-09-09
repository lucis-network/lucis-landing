// @ts-nocheck
import s from "./index.module.sass";
import React, {useEffect, useState} from "react";
import {LINK_API_INSIGHT, LINK_INSIGHT} from "utils/Enum";

export default function LastNews() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.insight.lucis.network/wp-json/wp/v2/posts?categories=358&orderby=date&order=desc").then(res => res.json()).then(res => {
      if(res) {
        setData(res);
      }
    }).catch(err => {
      console.warn(err);
    })
  }, [])

  const openUrlNewTab = (link: string, lang: string) => {
    const content = link.split(LINK_API_INSIGHT);
    window.open(LINK_INSIGHT + lang + "/" + content[1]);
  }

  return (
    <>
      {
        data &&
          <section>
            <div className={s.wrapper}>
                <div className={`lucis-container-2 ${s.container}`}>
                    <div className={s.title}>
                        <h2>LATEST NEWS</h2>
                    </div>
                    <div className={s.listNews}>
                      {
                        data &&
                          // @ts-ignore
                          <div className={s.leftListNews} onClick={() => openUrlNewTab(data[0]?.link, data[0]?.lang)}>
                              <div className={s.itemHotRaffles}>
                                  <div className={s.tagNameRaffles}>
                                      Hot news
                                  </div>
                                  <div className={s.imgRaffles}>
                                      <img src={data[0]?.yoast_head_json?.og_image[0].url ?? "/assets/homepage/hot_raffles.jpg"} alt=""/>
                                  </div>
                                  <div className={s.descHotRaffles}>
                                      <p>{data[0]?.title?.rendered}</p>
                                  </div>
                              </div>
                          </div>
                      }
                        <div className={s.rightListNews}>
                          {
                            data &&
                            data.slice(1,3).map(item => (
                              <div key={item?.id}>
                                <div className={s.itemHotNews} key={item?.id} onClick={() => openUrlNewTab(item?.link, item?.lang)}>
                                  <div className={`${s.tagNameRaffles} ${s.tagNameNews}`}>
                                    Hot news
                                  </div>
                                  <img src={item?.yoast_head_json?.og_image[0].url ?? "/assets/homepage/hot_news.png"} alt=""/>
                                  <div className={`${s.descHotRaffles} ${s.descHotNews}`}>

                                    <p>{item?.title?.rendered}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                          {/*<div className={`${s.itemHotNews}`}>*/}
                          {/*  <div className={`${s.tagNameRaffles} ${s.tagNameNews}`}>*/}
                          {/*    Lucis Review*/}
                          {/*  </div>*/}
                          {/*  <img src="/assets/homepage/lucis_review.png" alt=""/>*/}
                          {/*  <div className={`${s.descHotRaffles} ${s.descHotNews}`}>*/}
                          {/*    <p>Luicis review Current game market assessment.</p>*/}
                          {/*  </div>*/}
                          {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      }
      </>
  );
};
