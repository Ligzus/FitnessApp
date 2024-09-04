import React from "react";
import "./TrainingSelectModal.css";
import { Link } from "react-router-dom";

interface ModalProps {
	closeModal: () => void;
	onSubmit: () => void;
}

const TrainingSelectModal: React.FC<ModalProps> = ({ closeModal, onSubmit }) => {
	return (
		<div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50" onClick={closeModal}>
			<div
				className="relative flex flex-col items-center p-8 gap-8 w-[350px] bg-white shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)] rounded-[30px] overflow-hidden"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex flex-col items-start gap-3 w-full h-full">
					<h2 className="text-black text-[34px] text-start leading-10 font-medium mb-[20px]">Выберите тренировку</h2>

					<div className="flex flex-col gap-3 w-full h-[374px] overflow-y-auto leading-5 pr-[24px]">
						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-check" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Утренняя практика
								<p className="text-[14px] py-[10px]">Йога на каждый день / 1 день</p>
							</Link>
						</div>

						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-check" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Красота и здоровье
								<p className="text-[14px] py-[10px]">Йога на каждый день / 2 день</p>
							</Link>
						</div>

						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-uncheck" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Асаны стоя
								<p className="text-[14px] py-[10px]">Йога на каждый день / 3 день</p>
							</Link>
						</div>

						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-uncheck" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Растягиваем мышцы бедра
								<p className="text-[14px] py-[10px]">Йога на каждый день / 4 день</p>
							</Link>
						</div>

						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-uncheck" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Гибкость спины
								<p className="text-[14px] py-[10px]">Йога на каждый день / 5 день</p>
							</Link>
						</div>

						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-uncheck" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Асаны стоя
								<p className="text-[14px] py-[10px]">Йога на каждый день / 3 день</p>
							</Link>
						</div>

						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-uncheck" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Растягиваем мышцы бедра
								<p className="text-[14px] py-[10px]">Йога на каждый день / 4 день</p>
							</Link>
						</div>

						<div className="flex gap-1 w-full text-start items-center border-b-2">
							<svg className="w-[32px] h-[32px]">
								<use xlinkHref="./icon/sprite.svg#icon-uncheck" />
							</svg>
							<Link className="text-[18px]" to={"/training"}>
								Гибкость спины
								<p className="text-[14px] py-[10px]">Йога на каждый день / 5 день</p>
							</Link>
						</div>
					</div>
				</div>
				<div className="flex items-center w-full">
					<button
						className="flex text-black font-medium text-lg font-medium flex-row justify-center items-center w-full h-[52px] bg-[#BCEC30] hover:bg-[#C6FF00] active:bg-[#000000] active:text-[#FFFFFF] rounded-[46px]"
						onClick={onSubmit}
					>
						Начать
					</button>
				</div>
			</div>
		</div>
	);
};

export default TrainingSelectModal;
